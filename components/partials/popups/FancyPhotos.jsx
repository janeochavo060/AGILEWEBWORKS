import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// fancyId is a unique identifier for the fancybox instance
export default function FancyPhoto({ fancyId, children, ...props }) {
  Fancybox.bind(`[data-fancybox="${fancyId}"]`, {
    dragToClose: false,

    Toolbar: {
      display: {
        right: ["close", "thumbs", "fullscreen"],
        middle: [],
        left: [],
      },
    },

    Images: {
      zoom: false,
    },

    Thumbs: {
      type: "classic",
    },
  });

  return <div>{children}</div>;
}
