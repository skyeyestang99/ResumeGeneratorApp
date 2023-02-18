import "./Job.css";

export default function Job({ position, employer, description, location, link }) {
    return (
      <div className="job-item">
        <h3 className="job-item-position">{position}</h3>
        <p className="job-item-employer">{employer}</p>
        <p className="job-item-location">{location}</p>
        <p className="job-item-description">{description}</p>
      </div>
    );
}
