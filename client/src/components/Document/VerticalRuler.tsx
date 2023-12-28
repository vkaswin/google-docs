import { useEffect, useState } from "react";
import classNames from "classnames";
import { config } from "@/constants";

type IVerticalRuler = {
  label?: string;
  top: number;
  className: string;
};

const VerticalRuler = () => {
  const [ruler, setRuler] = useState<IVerticalRuler[]>([]);

  const tinyMargin = "before:w-[6px]";

  const largeMargin = "before:w-[12px]";

  useEffect(() => {
    createRulerMargins();
  }, []);

  const createRulerMargins = () => {
    let y = 0;
    let ruler: IVerticalRuler[] = [];

    for (let i = 1; i <= 11; i++) {
      if (y >= config.docHeight) break;

      ruler.push({
        label: i.toString(),
        top: y,
        className: tinyMargin,
      });

      y += config.rulerOffset;

      for (let j = 1; j <= 7; j++) {
        if (y >= config.docHeight) break;

        ruler.push({
          top: y,
          className: j === 4 ? largeMargin : tinyMargin,
        });

        y += config.rulerOffset;
      }
    }

    setRuler(ruler);
  };

  return (
    <div className="absolute top-4 left-0 h-[var(--doc-height)] w-[var(--ruler-size)]">
      {ruler.map(({ label, className, top }, index) => {
        return (
          <div
            key={index}
            className={classNames(
              "absolute w-full before:absolute before:h-[1px] before:right-0 before:top-0 before:bg-dark-gray",
              className
            )}
            style={{ top }}
          >
            {label && (
              <span className="absolute -top-[7px] right-2 text-[10px] text-dark-gray font-medium">
                {label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VerticalRuler;
