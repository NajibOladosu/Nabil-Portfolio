"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type Props = { theme: "light" | "dark"; motionEnabled: boolean };

export function BackgroundScene({ theme, motionEnabled }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);
  const motionRef = useRef(motionEnabled);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);
  useEffect(() => {
    motionRef.current = motionEnabled;
  }, [motionEnabled]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Skip the WebGL scene on narrow viewports: the icosahedron reads as an
    // oversized, low-contrast wash behind text at phone widths, and the extra
    // GPU/battery cost isn't worth it there. Matches the .bg-three CSS hide below.
    if (innerWidth < 820) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer:fine)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6;

    const geo = new THREE.IcosahedronGeometry(1.75, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0xc67139, roughness: 0.38, metalness: 0.16, flatShading: true });
    const mesh = new THREE.Mesh(geo, mat);
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0xc67139, transparent: true, opacity: 0.22 })
    );
    const grp = new THREE.Group();
    grp.add(mesh);
    grp.add(wire);
    scene.add(grp);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const d1 = new THREE.DirectionalLight(0xffd9b0, 1.4);
    d1.position.set(3, 4, 5);
    scene.add(d1);
    const d2 = new THREE.DirectionalLight(0xa9bd8a, 0.7);
    d2.position.set(-4, -2, 2);
    scene.add(d2);

    const applyTheme = (t: "light" | "dark") => {
      const c = t === "dark" ? 0xe88f52 : 0xf0a76a;
      mat.color.setHex(c);
      wire.material.color.setHex(t === "dark" ? 0xe88f52 : 0xe0894a);
      wire.material.opacity = 0.24;
    };
    applyTheme(theme);

    const rot = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    const follow = { x: 0, y: 0 };
    let mx = 0;
    let my = 0;
    let hovering = false;
    let dragging = false;
    let last = { x: 0, y: 0 };
    let lastScroll = typeof scrollY === "number" ? scrollY : 0;
    let paused = false;
    let raf = 0;

    const ray = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const hitTest = (cx: number, cy: number) => {
      ndc.x = (cx / innerWidth) * 2 - 1;
      ndc.y = -((cy / innerHeight) * 2 - 1);
      ray.setFromCamera(ndc, camera);
      return ray.intersectObject(mesh, false).length > 0;
    };

    const onMove = (e: PointerEvent) => {
      mx = (e.clientX / innerWidth) * 2 - 1;
      my = (e.clientY / innerHeight) * 2 - 1;
      if (!fine) return;
      if (dragging) {
        const dx = e.clientX - last.x;
        const dy = e.clientY - last.y;
        last = { x: e.clientX, y: e.clientY };
        rot.y += dx * 0.009;
        rot.x += dy * 0.009;
        vel.y = dx * 0.009;
        vel.x = dy * 0.009;
      } else {
        const h = hitTest(e.clientX, e.clientY);
        if (h !== hovering) {
          hovering = h;
          document.body.style.cursor = h ? "grab" : "";
        }
      }
    };
    const onDown = (e: PointerEvent) => {
      if (reduced || !fine || !hovering) return;
      dragging = true;
      last = { x: e.clientX, y: e.clientY };
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      document.body.style.userSelect = "";
      document.body.style.cursor = hovering ? "grab" : "";
    };
    const onScroll = () => {
      const y = scrollY;
      const dy = y - lastScroll;
      lastScroll = y;
      if (reduced || !motionRef.current) return;
      vel.x += Math.max(-0.16, Math.min(0.16, dy * 0.0009));
    };
    const onVis = () => {
      paused = document.hidden;
    };

    addEventListener("pointermove", onMove, { passive: true });
    addEventListener("pointerdown", onDown, { passive: true });
    addEventListener("pointerup", onUp, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVis);

    const resize = () => {
      const w = innerWidth;
      const h = innerHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      grp.position.x = w > 820 ? 3.15 : 0;
      grp.position.y = w > 820 ? 0.15 : 1.7;
      camera.updateProjectionMatrix();
    };
    resize();
    addEventListener("resize", resize);

    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (paused) return;
      if (!dragging) {
        rot.x += vel.x;
        rot.y += vel.y;
        vel.x *= 0.93;
        vel.y *= 0.93;
        const speed = Math.hypot(vel.x, vel.y);
        if (hovering) {
          follow.y += (mx * 0.55 - follow.y) * 0.08;
          follow.x += (my * 0.4 - follow.x) * 0.08;
        } else {
          follow.y += -follow.y * 0.05;
          follow.x += -follow.x * 0.05;
          if (speed < 0.0016 && motionRef.current && !reduced) rot.y += 0.0032;
        }
      }
      grp.rotation.y = rot.y + follow.y;
      grp.rotation.x = rot.x + follow.x;
      applyTheme(themeRef.current);
      renderer.render(scene, camera);
    };
    if (reduced) renderer.render(scene, camera);
    else loop();

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", onMove);
      removeEventListener("pointerdown", onDown);
      removeEventListener("pointerup", onUp);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} className="bg-three" data-three />;
}
