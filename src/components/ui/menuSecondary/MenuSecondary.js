import React from 'react';
import { Link } from 'react-router-dom';
import { 
	ContainerMenu, 
	ItemMenu, 
	ItemsMenu, 
	LinkItemMenu,
	Wrapper 
} from '../../../styledComponents/secondaryStyles';
import { SubMenuCategory } from './SubMenuCategory';

export const MenuSecondary = () => {

    return (
		<Wrapper>
			<ContainerMenu>
				<ItemsMenu>

					<ItemMenu>
						<LinkItemMenu>
							Category
						</LinkItemMenu>
						<SubMenuCategory />
					</ItemMenu>
					
					<ItemMenu>
						<LinkItemMenu>
							<Link to='/spartan_books/client/about_us'>
								About us?
							</Link>
						</LinkItemMenu>
					</ItemMenu>
					
					<ItemMenu>
						<LinkItemMenu>
							<Link to='/spartan_books/client/contact'>
								Contact
							</Link>
						</LinkItemMenu>
					</ItemMenu>
					
					<ItemMenu>
						<LinkItemMenu>
							<Link to='/spartan_books/client/faqs'>
								FAQs
							</Link>
						</LinkItemMenu>
					</ItemMenu>

					<ItemMenu>
						<LinkItemMenu>
							<Link to='/spartan_books/client/privacy_policies'>
								Privacy Policies
							</Link>
						</LinkItemMenu>
					</ItemMenu>

				</ItemsMenu>
			</ContainerMenu>
		</Wrapper>
    )
}