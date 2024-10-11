import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContact } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const searchContact = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .trim()
      .includes(searchContact.toLowerCase().trim())
  );

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((item) => {
          return (
            <li key={item.id} className={css.item}>
              <Contact name={item.name} number={item.number} id={item.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
