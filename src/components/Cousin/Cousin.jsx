import { PropTypes } from "prop-types";
import Special from "../Special/Special";

const Cousin = ({ name,asset }) => {
  return (
    <div>
      <h3>cousin</h3>
          <p>{name}</p>
          <section className="flex">
              <Special asset={asset}></Special>
          </section>
    </div>
  );
};

Cousin.propTypes = {
  name: PropTypes.string,
};

export default Cousin;
