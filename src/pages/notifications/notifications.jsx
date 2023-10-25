import { Typography, Box, Grid, Card } from '@mui/material';
import { createClient } from '@supabase/supabase-js';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const supabaseURL = 'https://jvgvyyjbukqegrisvrrd.supabase.co';
const supabaseApiKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2Z3Z5eWpidWtxZWdyaXN2cnJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MTM2OTMsImV4cCI6MjAxMjA4OTY5M30.1Y22eOpbynuWC3CIy4z2ANovxRli7gQiMlV1AXt9BiA';
const supabase = createClient(supabaseURL, supabaseApiKey);

export default function Notifications(props) {
	/*const [notifications, setNotifications] = useState([]);

	useEffect(() => {
		getNotifications();
	}, []);

	async function getNotifications() {
		const { data } = await supabase.from('notifications').select();
		setNotifications(data);
	}*/

	return (
		<>
			<motion.div
				variants={props.routeVariants}
				initial='initial'
				animate='final'
			>
				<Typography
					fontFamily='Monoton'
					variant='h3'
					align='center'
					sx={{ marginTop: 14 }}
					gutterBottom
				>
					NOTIFICATIONS
				</Typography>
				{/*<Box
					onClick={() => console.log('esngk')}
					sx={{ width: 'auto', maxWidth: 'md', margin: 'auto' }}
				>
					<Grid container spacing={2} sx={{ flexDirection: 'column' }}>
						{notifications.map((e) => (
							<Grid item sx={{ height: 120 }}>
								<Card
									variant='outlined'
									sx={{ height: '100%', width: '100%', borderRadius: 3 }}
								>
									{' '}
									<Typography key={e.content}>{e.content}</Typography>
								</Card>
							</Grid>
						))}
					</Grid>
						</Box>*/}
			</motion.div>
		</>
	);
}
