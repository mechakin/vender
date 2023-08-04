"use client";

import { Modal } from "@/components/ui/modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function NotFoundModal({}) {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      title="Page not found."
      description="The page you requested does not exist."
      isOpen={true}
      onClose={() => router.replace("/")}
    >
      <div className="flex w-full items-center justify-end space-x-2 pt-6">
        <Button variant="default" onClick={() => router.replace("/")}>
          Go back
        </Button>
      </div>
    </Modal>
  );
}
