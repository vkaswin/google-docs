import { useEffect, useState } from "react";
import classNames from "classnames";
import { config } from "@/constants";

type IHorizontalRuler = {
  label?: string;
  left: number;
  className: string;
};

const HorizontalRuler = () => {
  const [ruler, setRuler] = useState<IHorizontalRuler[]>([]);

  const tinyMargin = "before:h-[6px]";

  const largeMargin = "before:h-[12px]";

  const rulerOffset = 12;

  useEffect(() => {
    createRulerMargins();
  }, []);

  const createRulerMargins = () => {
    let x = 0;
    let ruler: IHorizontalRuler[] = [];

    for (let i = 1; i <= 11; i++) {
      if (x >= config.docWidth) break;

      ruler.push({
        label: i.toString(),
        left: x,
        className: tinyMargin,
      });

      x += rulerOffset;

      for (let j = 1; j <= 7; j++) {
        if (x >= config.docWidth) break;

        ruler.push({
          left: x,
          className: j === 4 ? largeMargin : tinyMargin,
        });

        x += rulerOffset;
      }
    }

    setRuler(ruler);
  };

  return (
    <div className="relative w-full h-[var(--ruler-size)] after:absolute after:left-[var(--ruler-size)] after:bottom-0 after:w-[calc(100%-var(--ruler-size)*2)] after:h-[1px] after:bg-gray">
      <div className="relative -left-[7px] w-[var(--doc-width)] h-full mx-auto cursor-default">
        {ruler.map(({ label, className, left }, index) => {
          return (
            <div
              key={index}
              className={classNames(
                "absolute h-full before:absolute before:w-[1px] before:left-0 before:bottom-0 before:bg-dark-gray",
                className
              )}
              style={{ left }}
            >
              {label && (
                <span className="absolute top-0 text-xs text-dark-gray font-medium">
                  {label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalRuler;
