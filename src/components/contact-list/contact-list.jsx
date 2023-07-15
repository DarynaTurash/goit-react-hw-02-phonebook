import { ListContainer, StyledList, Contact, Name, ButtonDelete, Number } from "./contact-list.styled"

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ListContainer>
            <StyledList>
            {contacts.map(contact => <Contact key={contact.id}>
                    <Name>{contact.name}</Name>
                    <Number>{contact.number}</Number>
                    <ButtonDelete type='button' onClick={() =>onDelete(contact.id)}>Delete</ButtonDelete>
                </Contact>)}
            </StyledList>
        </ListContainer>
    )
}