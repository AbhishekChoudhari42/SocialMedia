import styled from "styled-components";
import UserIcon from "../Components/UserIcon";

const SuggestedProfileNames = [
  "Nelle Leonard",
  "Ethan Williams",
  "Earl Elliott",
  "Eugenia Crawford",
  "Lottie Allison",
];

const SuggestionsContainer = styled.div`
  height: 100dvh;
  width: 330px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 2.5rem 1.5rem;
  border-left: 1px solid #333333;
  display: flex;
  flex-direction: column;
  color: white;

  @media (max-width: 1300px) {
    display: none;
  }
`;

const ProfilePicName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.mb}rem;
`;

const ProfileName = styled.div`
  font-size: 1rem;
`;

const SuggestedForYou = styled.div`
  font-size: 0.85rem;
  color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
`;

const SeeAllBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

const SuggestedProfiles = styled.div`
  display: flex;
  flex-direction: column;
`;

const Suggestions = () => {
  return (
    <>
      <SuggestionsContainer>
        <ProfilePicName>
          <UserIcon isOnline={false} height={60} width={60} mr={1} />
          <ProfileName>Raunak Pandey</ProfileName>
        </ProfilePicName>
        <SuggestedForYou>
          <p>Suggested For You</p>
          <SeeAllBtn>See All</SeeAllBtn>
        </SuggestedForYou>
        <SuggestedProfiles>
          {SuggestedProfileNames.map((name) => {
            return (
              <ProfilePicName key={name} mb={1}>
                <UserIcon isOnline={true} height={40} width={40} mr={1} />
                <ProfileName>{name}</ProfileName>
              </ProfilePicName>
            );
          })}
        </SuggestedProfiles>
      </SuggestionsContainer>
    </>
  );
};

export default Suggestions;
