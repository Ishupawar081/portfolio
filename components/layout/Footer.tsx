"use client";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] py-8 mt-auto">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#71717a]">
          © {new Date().getFullYear()} Vaishnavi Pawar. All rights reserved.
        </p>
        <p className="text-xs text-[#71717a]">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
