import Link from "next/link";
export const getStaticProps = async () => {
  const some = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await some.json();
  return {
    props: { ninjas: data },
  };
};


const Ninjas = ({ninjas}) => {
  return (
    <div  style={{ textAlign: "center" }}>
      <h1>Ninjas Listing</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <h3 className="card">{ninja.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
