import React, { FC, useRef, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import PencilIcon from "@/assets/icons/solid/pencil.svg?react";

type Props = {
  imageUrl?: string;
};

export const AvatarImagePicker: FC<Props> = ({ imageUrl = null }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState<string | null>(imageUrl);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cropperRef = useRef<ReactCropperElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
        setIsPopoverOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
      setCroppedImage(cropper.getCroppedCanvas().toDataURL());
      setIsPopoverOpen(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4 relative h-fit">
      <div className="relative size-[90px]">
        {croppedImage ? (
          <img
            src={croppedImage}
            alt="Cropped Avatar"
            className="rounded-full w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded-full">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>
      <Input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <Popover open={isPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            onClick={triggerFileInput}
            className="bg-[#232323] hover:bg-black rounded-full size-[30px] p-0 absolute bottom-0 -right-2"
          >
            <PencilIcon />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto max-w-[50vw] text-black bg-white/90" align="center">
          {imageSrc && (
            <Cropper
              src={imageSrc}
              style={{ height: 400 }}
              aspectRatio={1}
              guides={false}
              ref={cropperRef}
              className="mb-4 max-w-[50vw]"
            />
          )}
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setIsPopoverOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleCrop} className="bg-[#232323] hover:bg-black text-white">
              Crop & Save
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
