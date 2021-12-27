import React from 'react';
import { ButtomSend, CommentAdd, Comment, CommentContainer, CommentSend, CommentsSection, HourDateComment, InputComment, Text, TextComment, UserComment } from '../../../styledComponents/commentsStyles';

export const SectionComments = () => {
    return (
        <CommentContainer>
            <CommentAdd>
                <Text>Comments</Text>
                <CommentSend>
                    <InputComment type='text' placeholder='Add a comment' />
                    <ButtomSend>
                        <i className='bx bxs-send'></i>
                    </ButtomSend>    
                </CommentSend>
            </CommentAdd>

            <CommentsSection>
            
                <Comment>
                    <UserComment>
                        Santiago Muñoz Zecua
                    </UserComment>
                    <TextComment>
                        Hello, I found this painting very interesting
                    </TextComment>
                    <HourDateComment>
                        07-10-21 23:34:22
                    </HourDateComment>
                </Comment>

                <Comment>
                    <UserComment>
                        Santiago Muñoz Zecua
                    </UserComment>
                    <TextComment>
                        Hello, I found this painting very interesting
                    </TextComment>
                    <HourDateComment>
                        07-10-21 23:34:22
                    </HourDateComment>
                </Comment>

                <Comment>
                    <UserComment>
                        Santiago Muñoz Zecua
                    </UserComment>
                    <TextComment>
                        Hello, I found this painting very interesting
                    </TextComment>
                    <HourDateComment>
                        07-10-21 23:34:22
                    </HourDateComment>
                </Comment>

                <Comment>
                    <UserComment>
                        Santiago Muñoz Zecua
                    </UserComment>
                    <TextComment>
                        Hello, I found this painting very interesting
                    </TextComment>
                    <HourDateComment>
                        07-10-21 23:34:22
                    </HourDateComment>
                </Comment>
            </CommentsSection>

        </CommentContainer>
    )
}
