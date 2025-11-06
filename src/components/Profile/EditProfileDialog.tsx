import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";

export default function EditProfileDialog({
  open,
  onOpenChange,
  editForm,
  setEditForm,
  onSubmit,
}: EditProfileDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {(["name", "bio", "location", "website"] as const).map((field) => (
            <div key={field} className="space-y-2">
              <Label className="capitalize">{field}</Label>
              {field === "bio" ? (
                <Textarea
                  name={field}
                  value={editForm[field]}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      [field]: e.target.value,
                    }))
                  }
                  className="min-h-[100px]"
                  placeholder="Tell us about yourself"
                />
              ) : (
                <Input
                  name={field}
                  value={editForm[field]}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      [field]: e.target.value,
                    }))
                  }
                  placeholder={`Your ${field}`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={onSubmit}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
