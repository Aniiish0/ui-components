import { MapViewProps } from "./types";

const MapView = ({ searchText, apiKey }: MapViewProps) => {
  const sanitizedSearchText = encodeURIComponent(searchText);
  return (
    <div className="card rounded-0" style={{ height: "100%" }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: "0" }}
        loading="lazy"
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
              &q=${sanitizedSearchText}`}
      ></iframe>
    </div>
  );
};

export default MapView;
