import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.pageYOffset > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-20 cursor-pointer">
      <div className="flex items-center gap-2.5">
        {isVisible && (
          <div
            onClick={scrollToTop}
            aria-label="scroll to top"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-red-500 text-black shadow-md transition duration-300 ease-in-out hover:bg-primary/60"
          >
            <ArrowUp className="h-5 w-5" />
          </div>
        )}
      </div>
    </div>
  );
}
