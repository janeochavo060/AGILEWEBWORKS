import EnvelopIcon from "@/components/svg/EnvelopIcon"
import LocationPin from "@/components/svg/LocationPinIcon"
import MobileIcon from "@/components/svg/MobileIcon"

export default function Contact () {
  return (
    <div className="mt-32 p-3">
      <p className="my-5">If you have any inquiries, comments and suggestions, We would glad to hear it from you. You may message us through our contact information below:</p>
      <div>
        <div className="flex">
          <div className="p-2 mr-1">
            <LocationPin width="20px" height="20px" />
          </div>
          <div>
            2nd Floor Department Of Education Building, Deped Meralco Avenue, Pasig, 1605 Metro Manila
          </div>
        </div>
        <div className="flex">
          <div className="p-2 mr-1">
            <MobileIcon width="20px" height="20px" />
          </div>
          <div>
            919 541 6000
          </div>
        </div>
        <div className="flex">
          <div className="p-2 mr-1">
            <EnvelopIcon width="18px" height="20px" />
          </div>
          <div>
            info@deped.gov.ph
          </div>
        </div>
      </div>

    </div>
  )
}