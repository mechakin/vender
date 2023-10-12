"use client";

import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Trash } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

type ImageUploadProps = {
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  value: string[];
};

export default function ImageUpload({
  onChange,
  onRemove,
  value,
}: ImageUploadProps) {
  const onUpload = (result: string) => {
    onChange(result);
  };

  return (
    <>
      <div className="mb-4 flex items-center gap-4">
        {value.map((url) => (
          <div
            key={url}
            className="relative h-[200px] w-[200px] overflow-hidden rounded-md"
          >
            <div className="absolute right-2 top-2 z-10">
              <Button
                type="button"
                onClick={() => onRemove(url)}
                variant="destructive"
                size="icon"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <img
              className="object-cover object-top"
              alt="Image"
              src={url}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-start pt-4">
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            if (res) {
              const imageUrl = res[0].fileUrl;
              onUpload(imageUrl);
            }
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            toast.error(`${error.message}`);
          }}
        />
      </div>
    </>
  );
}
