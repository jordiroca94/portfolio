import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="h-screen bg-matteBlack grid place-items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white flex gap-3 items-center text-base lg:text-lg">
          <div>404 </div>
          <div className="h-4 border border-white" />
          <div>Page Not Found</div>
        </h1>
        <a
          className="text-white rounded-md border-white border py-2 px-4 hover:text-black hover:bg-white cursor-pointer transition-all duration-400 ease-in"
          href="/"
        >
          Home
        </a>
      </div>
    </div>
  );
}
