"use client";

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      description="add a new store to manage products and categories"
      title="create store"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      future create store form
    </Modal>
  );
};
