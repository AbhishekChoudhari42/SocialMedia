import styled from "styled-components";
import UserIcon from "./UserIcon";

const SuggestedProfileNames = [
  "Nelle Leonard",
  "Ethan Williams",
  "Earl Elliott",
  "Eugenia Crawford",
  "Lottie Allison",
];

const StoriesContainer = styled.div`
  display: flex;
  width: 630px;
  height: 100px;
  padding: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  overflow-x: scroll;
  flex-shrink: 0;
  transition: 0.3s;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
`;

const StoryAuthor = styled.p`
  font-size: 0.8rem;
  margin: auto;
`;

const Stories = () => {
  return (
    <>
      <StoriesContainer>
        <Story>
          <UserIcon
            isOnline={false}
            height={55}
            width={55}
            mr={1}
            isStory={true}
          />
          <StoryAuthor>Raunak Pandey</StoryAuthor>
        </Story>
        {SuggestedProfileNames.map((name) => {
          return (
            <Story key={name}>
              <UserIcon
                isOnline={false}
                height={55}
                width={55}
                mr={1}
                isStory={true}
              />
              <StoryAuthor>{name}</StoryAuthor>
            </Story>
          );
        })}
      </StoriesContainer>
    </>
  );
};

export default Stories;
