import { services } from "@/Constants/data";
import { MainLayout } from "@/Layouts";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const service = services.find((s) => s.id === serviceId);
  return (
    <>
    <MainLayout>
        <div className="bg-secondary">
            <div className="layout py-10 md:py-20">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <img src={service?.image} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-green-800 font-semibold text-3xl"> {service?.title} </h3>
                        <p className="text-sm md:text-base text-justify">
                            {service?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="layout">
            <form className="space-y-4">
                <div>
                    <label htmlFor="firstname" className="font-medium text-muted">Firstname</label>
                    <input type="text" placeholder="Enter your firstname" className="input w-full" />
                </div>
                <div>
                    <label htmlFor="lastname" className="font-medium text-muted">Lastname</label>
                    <input type="text" placeholder="Enter your lastname" className="input w-full" />
                </div>
                <div>
                    <label htmlFor="email" className="font-medium text-muted">E-mail Address</label>
                    <input type="email" placeholder="Enter your email address" className="input w-full" />
                </div>
                <div>
                    <label htmlFor="subject" className="font-medium text-muted">Subject</label>
                    <input type="text" placeholder="Enter your email subject" className="input w-full" />
                </div>
                <div>
                    <label htmlFor="message" className="font-medium text-muted">Message</label>
                    <textarea id="message" rows={5} placeholder="Write your message" className="message w-full"></textarea>
                </div>
                <button className="btn btn-primary w-full h-11 rounded-md">Send Message</button>
            </form>
        </div>
    </MainLayout>
    </>
  )
}

export default ServiceDetails