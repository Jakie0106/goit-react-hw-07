import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
// import { deleteContact } from "../../redux/contactsSlice.js";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <div className={css.contactItem}>
        <p className={css.textName}>
          <FaUser className={css.icon} />
          {name}
        </p>

        <a className={css.textName} href={number}>
          <FaPhoneAlt className={css.icon} />
          {number}
        </a>
      </div>
      <button
        className={css.btnDelete}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
