import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMapMarker } from "@mdi/js";
import { mdiHours24 } from "@mdi/js";
import { mdiEmailFastOutline } from "@mdi/js";

const TypeofContact = () => {
  return (
    <div className="TypeofContact">
      <div className="ContactContainer lg:flex lg:flex-col md:flex-row sm:md:flex-row">
        <div className="ContactCard my-3">
          <div className="rounded-full border p-8 my-3" >
            <Icon path={mdiMapMarker}  size={2} />
          </div>
          <div className="ContactText">
            <h3>OFFICE ADDRESS</h3>
            <p>380 St Khalda Road, Amman 3004, Jordan</p>
          </div>
        </div>
        <div className="ContactCard my-3">
          <div className="rounded-full border p-8 my-3">
            <Icon path={mdiHours24} size={2} />
          </div>
          <div className="ContactText">
            <h3>Customer Service</h3>
            <p>Monday to Friday 09:00 to 18:30 Saturday 15:30</p>
          </div>
        </div>
        <div className="ContactCard my-3">
          <div className="rounded-full border p-8 my-3">
            <Icon path={mdiEmailFastOutline}  size={2} />
          </div>
          <div className="ContactText">
            <h3>MESSAGE US:</h3>
            <p>
              E-mail :{" "}
              <Link to="support@example.com" target="_blank">
                support@example.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeofContact;
