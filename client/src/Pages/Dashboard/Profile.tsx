import { ButtonWithLoader } from "@/Components/UI";
import { DashboardLayout } from "@/Layouts";
import { ImagePlus, Info } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
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
                <label htmlFor="image">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept=".png, .jpg, .jpeg"
                    className="hidden"
                  />
                  <div className="btn-primary cursor-pointer inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg text-sm font-semibold">
                    <ImagePlus size={20} /> Change Image
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <form className="space-y-2 bg-secondary p-4">
              <h3 className="text-lg font-semibold">Personal Info</h3>
              <div className="bg-background p-4 rounded-lg border border-line">
                <label htmlFor="name" className="text-sm text-muted">
                  Full Name
                </label>
                <input
                  type="text"
                  value="Gift Jackson"
                  className="w-full h-9 text-md font-semibold"
                />
              </div>
              <div className="bg-background p-4 rounded-lg border border-line">
                <label
                  htmlFor="name"
                  className="text-sm text-muted flex items-center gap-2"
                >
                  E-mail Address{" "}
                  <span className="cursor-pointer" onClick={()=> toast.warning("You cannot edit your email!")}>
                    <Info size={16} className="text-yellow-600" />
                  </span>
                </label>
                <input
                  type="text"
                  value="giftjackson@gmail.com"
                  readOnly
                  className="w-full h-9 text-md font-semibold"
                />
              </div>

              <div className="bg-background p-4 rounded-lg border border-line">
                <label htmlFor="name" className="text-sm text-muted">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full h-9 text-md font-semibold"
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
                />
              </div>

              <ButtonWithLoader
              initialText="Update"
              loadingText="Updating..."
              className="btn-primary w-full h-11 rounded-xl"
              />
            </form>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Profile;
