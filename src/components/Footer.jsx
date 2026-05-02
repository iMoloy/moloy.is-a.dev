import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border-main text-center text-text-muted text-sm">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
        <p>
          Coded in{" "}
          <a href="https://code.visualstudio.com/" className="text-text-main hover:text-accent transition-colors" target="_blank" rel="noreferrer">VS Code</a>. 
          Built with{" "}
          <a href="https://nextjs.org/" className="text-text-main hover:text-accent transition-colors" target="_blank" rel="noreferrer">Next.js</a>{" "}
          and{" "}
          <a href="https://tailwindcss.com/" className="text-text-main hover:text-accent transition-colors" target="_blank" rel="noreferrer">Tailwind CSS</a>.
        </p>
        <Image src="/image.gif" alt="Spinning TARDIS" width={80} height={68} unoptimized className="opacity-50 hover:opacity-100 transition-opacity duration-300" />
      </div>
    </footer>
  );
}
