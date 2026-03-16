/**
 * Portfolio Backend – Express Server
 * Run: npm install express cors && node server.js
 */
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

/* ─── Project Data ──────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    title: "KernelBumi",
    subtitle: "Custom Android Kernel",
    tag: "Linux 4.19 · MediaTek Helio G85",
    desc: "Full custom kernel targeting the Helio G85 SoC. Integrates KernelSU-Next and SUSFS 2.0.0 for advanced root management. Includes BORE scheduler, BFQ I/O, ZRAM/ZSTD compression, and Mali-G52 DVFS tuning patches.",
    stack: ["C", "Bash", "KernelSU-Next", "SUSFS 2.0", "Clang/LLVM"],
    status: "Active",
  },
  {
    id: 2,
    title: "Fast Hybrid Optimizer",
    subtitle: "Magisk/KernelSU Module",
    tag: "Android · Root Module",
    desc: "Unified Magisk/KernelSU module merging dual Normal/Battery optimizer modes with independent fast-charging tweaks. Features volume-key profile selection at install and a runtime Action button toggle.",
    stack: ["Shell", "Magisk API", "KernelSU API", "cpuset", "thermal"],
    status: "Stable",
  },
  {
    id: 3,
    title: "SUSFS Backport Toolkit",
    subtitle: "Kernel Compatibility Layer",
    tag: "SUSFS 2.0 · Linux 4.19",
    desc: "Tooling and patches to backport SUSFS 2.0.0 symbols into Linux 4.19 BSP trees. Resolves symbol mismatches in supercalls.c and conditional directive errors across clang build chains.",
    stack: ["C", "Kbuild", "Clang", "Git", "Python"],
    status: "Research",
  },
  {
    id: 4,
    title: "KernelSU Fork Automator",
    subtitle: "Build Pipeline",
    tag: "CI · Shell Scripting",
    desc: "Parameterized shell scripts for automated integration of KernelSU forks (KowSU, MamboSU, KernelSU-Next) with SUSFS patches. Targets simonpunk's kernel-4.19 SUSFS branch with idempotent patch application.",
    stack: ["Bash", "Git", "Python", "GitHub Actions"],
    status: "Stable",
  },
];

/* ─── Routes ────────────────────────────────────────────────── */

// Contact form endpoint – wire to your email provider (Nodemailer, Resend, etc.)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields required." });
  }
  // TODO: integrate Nodemailer / Resend here
  console.log(`[CONTACT] ${name} <${email}>: ${message}`);
  res.json({ success: true, message: "Message received. I'll get back to you." });
});

app.listen(PORT, () => {
  console.log(`Portfolio server running → http://localhost:${PORT}`);
});
module.exports = app;
