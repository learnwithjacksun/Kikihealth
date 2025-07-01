import { ButtonWithLoader } from "@/Components/UI";
import { useAuth } from "@/Hooks";
import { DashboardLayout } from "@/Layouts";
import { ImagePlus, Info, X } from "lucide-react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { ProfileSchema, profileSchema } from "@/schemas/profile";
import { useState } from "react";
import Modal from "@/Components/UI/modal";

const Profile = () => {
  const { userData } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstname: userData?.firstname,
      lastname: userData?.lastname,
      email: userData?.email,
      phone: userData?.phone || "",
      address: userData?.address || "",
    },
  });

  const onSubmit = (data: ProfileSchema) => {
    console.log(data);
    toast.warning("Feature not available!");
  };

  const onError = (data: FieldErrors) => {
    console.log(data);
    toast.error("Something went wrong!");
  };

  return (
    <>
      <DashboardLayout title="Profile">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-10">
          <div className="col-span-1">
            <div className="space-y-6">
              <div className="h-50 w-50 overflow-hidden rounded-full mx-auto">
                <img
                  src="/founder.jpg"
                  alt="user image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="center">
                <div
                  onClick={toggleMenu}
                  className="btn-primary cursor-pointer inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg text-sm font-semibold"
                >
                  <ImagePlus size={20} /> Change Image
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit, onError)}
              className="space-y-2 bg-secondary p-4"
            >
              <h3 className="text-lg font-semibold">Personal Info</h3>
              <div className="bg-background p-4 rounded-lg border border-line">
                <label htmlFor="firstname" className="text-sm text-muted">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full h-9 text-md font-semibold"
                  {...register("firstname")}
                />
                {errors.firstname && <p> {errors.firstname.message} </p>}
              </div>
              <div className="bg-background p-4 rounded-lg border border-line">
                <label htmlFor="lastname" className="text-sm text-muted">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full h-9 text-md font-semibold"
                  {...register("lastname")}
                />
                {errors.lastname && <p> {errors.lastname.message} </p>}
              </div>
              <div className="bg-background p-4 rounded-lg border border-line">
                <label
                  htmlFor="name"
                  className="text-sm text-muted flex items-center gap-2"
                >
                  E-mail Address{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => toast.warning("You cannot edit your email!")}
                  >
                    <Info size={16} className="text-yellow-600" />
                  </span>
                </label>
                <input
                  type="text"
                  readOnly
                  className="w-full h-9 text-md font-semibold"
                  {...register("email")}
                />
                {errors.email && <p> {errors.email.message} </p>}
              </div>

              <div className="bg-background p-4 rounded-lg border border-line">
                <label htmlFor="name" className="text-sm text-muted">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full h-9 text-md font-semibold"
                  {...register("phone")}
                />
              </div>
              <div className="bg-background p-4 rounded-lg border border-line">
                <label htmlFor="name" className="text-sm text-muted">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your office or home address"
                  className="w-full h-9 text-md font-semibold"
                  {...register("address")}
                />
                {errors.address && <p> {errors.address.message} </p>}
              </div>

              <ButtonWithLoader
                initialText="Update"
                loadingText="Updating..."
                className="btn-primary w-full h-11 text-sm rounded-xl"
              />
            </form>
          </div>
        </div>
      </DashboardLayout>

      {isOpen && (
        <Modal title="Update Image" isOpen={isOpen} onClose={toggleMenu}>
          <ImageUpload />
        </Modal>
      )}
    </>
  );
};

export default Profile;

const ImageUpload = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const clearImage = () => {
    setImage(null);
    setPreview("");
  };

  const onSave = () => {
    console.log(image);
    if(!image) {
       toast.error("Choose an image first!")
       return
    }
    toast.warning("Feature not available yet!")
  }

  return (
    <div className="space-y-4">
      {!preview && (
        <label htmlFor="image">
          <input
            type="file"
            name="image"
            id="image"
            accept=".png, .jpg, .jpeg"
            className="hidden"
            onChange={handleImage}
          />
          <div className="border border-line space-y-2 bg-secondary border-dashed rounded-xl p-4 flex-col center cursor-pointer hover:bg-secondary/40 transition">
            <ImagePlus className="text-muted" />
            <p className="text-sm font-medium">Click to upload image</p>
            <p className="text-sm text-muted">.PNG, .JPG, .JPEG (Max. 5MB)</p>
          </div>
        </label>
      )}

      {preview && (
        <div className="h-50 w-50 relative mx-auto">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover overflow-hidden rounded-full"
          />
          <button
            type="button"
            onClick={clearImage}
            className="absolute -top-2 -right-2 bg-red-600 text-white h-8 w-8 rounded-full flex items-center justify-center shadow"
          >
            <X size={18} />
          </button>
        </div>
      )}

      <ButtonWithLoader
        onClick={onSave}
        initialText="Save Image"
        loadingText="Saving"
        className="btn-primary text-sm w-full h-11 rounded-md mt-6"
      />
    </div>
  );
};
