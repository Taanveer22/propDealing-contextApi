import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
  return (
    <div>
      <h3>uncle</h3>
      <section className="flex">
        <Cousin name="rafsan" asset={asset}></Cousin>
        <Cousin name="sohana"></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
