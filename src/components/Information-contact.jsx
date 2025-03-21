const InformationContact = ({description,redirect, target, rel, role, className, children}) =>{
    return (
        <a href={redirect} target={target} rel={rel} role={role} className={className}>
            {children}{description}
        </a>
    );
}

export default InformationContact;