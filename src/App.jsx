function Employee(props) {
    return (
        <div>
            <img
                src="/Employee%20image.jpg"
                alt="Employee Photo"
                style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                    margin: "0 auto 20px"
                }}
            />

            <h2>Employee Details</h2>

            <p>Name: {props.name}</p>
            <p>Department: {props.department}</p>
            <p>Designation: {props.designation}</p>
            <p>Employee ID: {props.id}</p>
        </div>
    );
}

export default function App() {
    return (
        <Employee
            name="Anshuman"
            department="Biotechnology"
            designation="HR"
            id="2500010020"
        />
    );
}