export default function Gallery() {
  const scientists = [
    {
      name: "Maria Skłodowska-Curie",
      image: "https://i.imgur.com/szV5sdGs.jpg",
      profession: "physicist and chemist",
      awards: "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
      discovery: "polonium (element)"
    },
    {
      name: "Katsuko Saruhashi",
      image: "https://i.imgur.com/YfeOqp2s.jpg",
      profession: "geochemist",
      awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
      discovery: "a method for measuring carbon dioxide in seawater"
    }
  ];

  const ProfileSection = ({ scientist }) => (
    <section className="profile">
      <h2>{scientist.name}</h2>
      <img
        className="avatar"
        src={scientist.image}
        alt={scientist.name}
        width={70}
        height={70}
      />
      <ul>
        <li><b>Profession: </b>{scientist.profession}</li>
        <li><b>Awards: </b>{scientist.awards}</li>
        <li><b>Discovered: </b>{scientist.discovery}</li>
      </ul>
    </section>
  );

  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map(scientist => <ProfileSection key={scientist.name} scientist={scientist} />)}
    </div>
  );
}
