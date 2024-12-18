function Contact({ pictureURL, name, popularity, oscar, emmy }) {
  return (
    <tr className="contact">
      <td>
        <img src={pictureURL} alt="portrait" />
      </td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>{oscar}</td>
      <td>{emmy}</td>
    </tr>
  );
}

export default Contact;
