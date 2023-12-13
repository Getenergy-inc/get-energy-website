import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <div>
          <h1 className="font-extrabold lg:text-8xl md:text-7xl text-5xl -mt-[5rem]">404</h1>
          <p className="text-xl">Page Not Found</p>
        </div>

        <p className="mx-auto max-w-sm">This page you are looking for might have been removed or do not exist.</p>
        <div className="flex items-center justify-center">
          <div>
            <Link href={"/"}>
              <div className="flex items-center gap-2 font-bold text-primaryBlue border-b-2 pb-2">
                <ArrowLeft size={16} /> <span>Go Home</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
