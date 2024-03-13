import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useMenuStore } from "@/store/menu-store";

const useSectionInView = (sectionId?: string) => {
  const setActiveSection = useMenuStore((state) => state.setActiveSection);
  const { ref, inView } = useInView({
    threshold: 0.15,
    skip: !sectionId,
  });

  useEffect(() => {
    if (inView && sectionId) {
      setActiveSection(sectionId);
    }
  }, [inView, sectionId]);

  return { ref };
};

export default useSectionInView;
