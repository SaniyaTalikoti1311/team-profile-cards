import "./TeamCard.css"

export default function ProfileCard({ name, role, src, age = 22, isPresent, bio }) {
  return (
    <div className="container">
      <div className="ProfileCard">
        <img className="Avatar" src={src} alt="image not found" />
        <h1 className="Name">{name}</h1>
        <h2 className="Age">{age}</h2>
        <h3 className="Title">{role}</h3>
        <p className="Bio">{bio}</p>
        {isPresent ? <p className="True">Is Available</p> : <p className="False">Is Not Available</p>}
        <div className="Links">
          <a href="#" target="_blank" rel="noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}