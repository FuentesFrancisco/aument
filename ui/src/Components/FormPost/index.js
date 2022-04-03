import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Preview from '../showPost/index.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";

const Post = ({ action, post, request, ...props }) => {
    const history = useHistory();
	const isCreate = action === 'CREATE';
	const [input, setInput] = useState(
		isCreate
			? {}
			: post
	);
	const [convertedText, setConvertedText] = useState(		
        isCreate
        ? '' : post.text 
        );

	const handleChange = (field, value) => {
		setInput({ ...input, [field]: value });
	};

	const handleSubmit = (e) => {
        if (!input.title || !input.tag || !input.image || !convertedText) {
            Swal.fire({
                icon: 'error',
                title: 'All fields are required',
            });
        } else {
            request({ ...input, text: convertedText })
			.then(() => {
				history.push('/view');
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: err.response.data.error,
				});
			});
        }
	};

	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={3}>
						<FormGroup>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel1a-content'
									id='panel1a-header'
								>
									<Typography>Title</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<TextField
										initialValues={input?.title}
										value={input?.title}
										onChange={(e) => handleChange('title', e.target.value)}
										variant='standard'
										style={{ width: '100%' }}
                                        required
									/>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography>text</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<ReactQuill
										theme='snow'
										value={convertedText}
										onChange={setConvertedText}
                                        required
									/>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography>image</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<TextField
										value={input?.image}
										onChange={(e) => handleChange('image', e.target.value)}
										variant='standard'
										style={{ width: '100%' }}
                                        required
									/>
								</AccordionDetails>
							</Accordion>
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls='panel2a-content'
									id='panel2a-header'
								>
									<Typography>tag</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<TextField
										value={input?.tag}
										onChange={(e) => handleChange('tag', e.target.value)}
										variant='standard'
										style={{ width: '100%' }}
                                        required={true}
									/>
								</AccordionDetails>
							</Accordion>
							<Button
								variant='contained'
								style={{ marginTop: '5px' }}
								onClick={handleSubmit}
							>
								Guardar
							</Button>
							<Button
								variant='contained'
								style={{
									marginTop: '5px',
									backgroundColor: 'grey',
									color: 'white',
								}}
								color={'inherit'}
								onClick={() => {props.setAction(''); history.goBack()}}
							>
									Volver
							</Button>
						</FormGroup>
					</Grid>
					<Grid item xs={9}>
						<Preview post={{ ...input, text: convertedText }} {...props} />
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

export default Post;
