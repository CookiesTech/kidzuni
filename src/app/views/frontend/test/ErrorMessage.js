const ErrorMessage = ({ children }) => {



  return (
    <div
      style={{
        width: "50%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "#c51111",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",

      }}

    >
      {children}
    </div>
  );
};

export default ErrorMessage;
