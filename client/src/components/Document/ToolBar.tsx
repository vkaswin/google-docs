import { ChangeEvent, Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  Tooltip,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import ColorPicker from "./ColorPicker";
import { debounce } from "@/utils";
import { config } from "@/constants";

const activeClassName = "bg-light-blue rounded";
const btnClassName = "flex justify-center items-center w-[24px] h-[24px]";
const hoverClassName = "hover:bg-[#DFE4EB] p-1 rounded transition-colors";

const ToolBar = () => {
  const handleSearch = debounce<ChangeEvent<HTMLInputElement>>(
    (e) => console.log(e.target.value),
    500
  );

  const Divider = () => <div className="border border-r-[#c7c7c7] h-2/3"></div>;

  return (
    <Fragment>
      <div className="flex items-center h-[calc(var(--toolbar-height)-10px)] bg-mild-blue rounded-full mx-4 mb-[10px]">
        <div className="flex items-center gap-3 px-4 text-xl">
          <button className="flex items-center" disabled>
            <i className="bx-redo"></i>
          </button>
          <button className="flex items-center" disabled>
            <i className="bx-undo"></i>
          </button>
        </div>
        <Divider />
        <div className="flex items-center gap-3 px-4">
          <Menu placement="bottom-start">
            {({ isOpen }) => (
              <Fragment>
                <Tooltip label="Zoom" placement="bottom" className="tooltip">
                  <MenuButton className={classNames("w-15", hoverClassName)}>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">{1 * 100}%</span>
                      <i
                        className={classNames(
                          "bx-caret-down transition-transform",
                          isOpen ? "rotate-180" : "rotate-0"
                        )}
                      ></i>
                    </div>
                  </MenuButton>
                </Tooltip>
                <Portal>
                  <MenuList
                    minW={0}
                    className="relative bg-white w-fit"
                    zIndex={999}
                  >
                    {config.scale.map((value, index) => {
                      return (
                        <MenuItem
                          key={index}
                          className={`ql-font-${value} text-sm font-medium py-1 px-4`}
                        >
                          {value * 100}%
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Portal>
              </Fragment>
            )}
          </Menu>
        </div>
        <Divider />
        <div className="flex gap-3 px-4">
          <Menu placement="bottom-start">
            {({ isOpen }) => (
              <Fragment>
                <Tooltip label="Font" placement="bottom" className="tooltip">
                  <MenuButton className={classNames("w-44", hoverClassName)}>
                    <div className="flex justify-between items-center gap-4 pl-2 pr-2">
                      <span className="text-sm">Open Sans</span>
                      <i
                        className={classNames(
                          "bx-caret-down transition-transform",
                          isOpen ? "rotate-180" : "rotate-0"
                        )}
                      ></i>
                    </div>
                  </MenuButton>
                </Tooltip>
                <Portal>
                  <MenuList
                    className="relative bg-white max-h-60 w-40 overflow-y-auto custom-scrollbar"
                    zIndex={999}
                  >
                    {config.customFonts.map((font, index) => {
                      return (
                        <MenuItem key={index} className={`${font} py-1 px-4`}>
                          {config.fonts[font]}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </Portal>
              </Fragment>
            )}
          </Menu>
          <div className="flex items-center gap-3">
            <Menu placement="bottom-start">
              {({ isOpen }) => (
                <Fragment>
                  <Tooltip
                    label="Font Size"
                    placement="bottom"
                    className="tooltip"
                  >
                    <MenuButton className={classNames("w-15", hoverClassName)}>
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">16px</span>
                        <i
                          className={classNames(
                            "bx-caret-down transition-transform",
                            isOpen ? "rotate-180" : "rotate-0"
                          )}
                        ></i>
                      </div>
                    </MenuButton>
                  </Tooltip>
                  <Portal>
                    <MenuList
                      minW={0}
                      className="relative bg-white w-fit max-h-56 overflow-y-auto custom-scrollbar"
                      zIndex={999}
                    >
                      {config.fontSizes.map((value, index) => {
                        return (
                          <MenuItem
                            key={index}
                            className="text-sm font-medium py-1 px-4"
                          >
                            {value}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </Portal>
                </Fragment>
              )}
            </Menu>
          </div>
        </div>
        <Divider />
        <div className="flex items-center gap-3 px-4 text-xl">
          <Tooltip className="tooltip" label="Bold (Ctrl+B)">
            <button
              className={classNames(btnClassName, hoverClassName, {
                [activeClassName]: false,
              })}
            >
              <i className="bx-bold"></i>
            </button>
          </Tooltip>
          <Tooltip className="tooltip" label="Italic (Ctrl+I)">
            <button
              className={classNames(btnClassName, hoverClassName, {
                [activeClassName]: false,
              })}
            >
              <i className="bx-italic"></i>
            </button>
          </Tooltip>
          <Tooltip className="tooltip" label="Underline (Ctrl+U)">
            <button
              className={classNames(btnClassName, hoverClassName, {
                [activeClassName]: false,
              })}
            >
              <i className="bx-underline"></i>
            </button>
          </Tooltip>
          <Tooltip className="tooltip" label="Strikethrough (Ctrl+S)">
            <button
              className={classNames(btnClassName, hoverClassName, {
                [activeClassName]: false,
              })}
            >
              <i className="bx-strikethrough"></i>
            </button>
          </Tooltip>
        </div>
        <Divider />
        <div className="flex items-center gap-3 px-4 text-xl">
          <Popover>
            {({ onClose }) => {
              return (
                <Fragment>
                  <Tooltip className="tooltip" label="Text color">
                    <Box>
                      <PopoverTrigger>
                        <button
                          className={classNames(
                            "flex justify-center items-center",
                            hoverClassName,
                            "flex-col w-8 h-8"
                          )}
                        >
                          <i className="bx-font"></i>
                          <span
                            className="w-5 h-1 shadow-sm"
                            style={{ backgroundColor: "white" }}
                          ></span>
                        </button>
                      </PopoverTrigger>
                    </Box>
                  </Tooltip>
                  <Portal>
                    <Box zIndex={999} className="relative w-full h-full">
                      <PopoverContent boxSize="fit-content">
                        <ColorPicker
                          onClick={(color) => {
                            onClose();
                          }}
                        />
                      </PopoverContent>
                    </Box>
                  </Portal>
                </Fragment>
              );
            }}
          </Popover>
          <Popover>
            {({ onClose }) => {
              return (
                <Fragment>
                  <Tooltip className="tooltip" label="Fill color">
                    <Box>
                      <PopoverTrigger>
                        <button
                          className={classNames(
                            "flex justify-center items-center",
                            hoverClassName,
                            "flex-col w-8 h-8"
                          )}
                        >
                          <i className="bxs-color-fill"></i>
                          <span
                            className="w-5 h-1 shadow-sm"
                            style={{ backgroundColor: "white" }}
                          ></span>
                        </button>
                      </PopoverTrigger>
                    </Box>
                  </Tooltip>
                  <Portal>
                    <Box zIndex={999} className="relative w-full h-full">
                      <PopoverContent boxSize="fit-content">
                        <ColorPicker
                          onClick={(color) => {
                            onClose();
                          }}
                        />
                      </PopoverContent>
                    </Box>
                  </Portal>
                </Fragment>
              );
            }}
          </Popover>
        </div>
        <Divider />
        <div className="flex items-center gap-3 px-4 text-xl">
          <Tooltip className="tooltip" label="Remove format">
            <button className={classNames(btnClassName, hoverClassName)}>
              <i className="bxs-eraser"></i>
            </button>
          </Tooltip>
        </div>
        <Divider />
        <div className="flex items-center gap-3 px-4 text-xl">
          <Tooltip className="tooltip" label="Left">
            <button className={btnClassName}>
              <i className="bx-align-left"></i>
            </button>
          </Tooltip>
          <Tooltip className="tooltip" label="Center">
            <button className={btnClassName}>
              <i className="bx-align-middle"></i>
            </button>
          </Tooltip>
          <Tooltip className="tooltip" label="Right">
            <button className={btnClassName}>
              <i className="bx-align-right"></i>
            </button>
          </Tooltip>
        </div>
        <Divider />
        <div className="flex items-center gap-3 px-4 text-xl">
          <Tooltip className="tooltip" label="Insert link (Ctrl+k)">
            <button className={btnClassName}>
              <i className="bx-link-alt"></i>
            </button>
          </Tooltip>
          <Tooltip className="tooltip" label="Insert comment (Ctrl+Alt+M)">
            <button className={btnClassName}>
              <i className="bx-comment-add"></i>
            </button>
          </Tooltip>
        </div>
        <Divider />
        <div className="flex items-center gap-3 px-4">
          <div className="relative w-56 h-7">
            <input
              placeholder="Find in sheet"
              className="w-full h-full text-sm focus:outline-2 focus:outline-dark-blue pl-3 pr-8 rounded"
              onChange={handleSearch}
            />
            <i className="absolute right-2 top-1/2 -translate-y-1/2 bx-search text-gray-500 text-lg"></i>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ToolBar;
