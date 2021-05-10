import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { productAddAction } from "redux/actions";
import { useDropzone } from "react-dropzone";
import styles from "./dropzone.module.css";

function MyDropzone({ handlePicture }) {
	const [files, setFiles] = useState([]);

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/*",
		onDrop: (acceptedFiles) => {
			handlePicture(acceptedFiles[0]);
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	useEffect(
		() => () => {
			// Make sure to revoke the data uris to avoid memory leaks
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	const thumbs = files.map((file) => (
		<div className={styles.thumb} key={file.name}>
			<div className={styles.thumbInner}>
				<img src={file.preview} alt="foto produk" className={styles.img} />
			</div>
		</div>
	));
	return (
		<>
			<section>
				<div className={styles.dropzone}>
				<div
					{...getRootProps({ className: "dropzone" })}
					
				>
					<input {...getInputProps()} className={styles.dropzone}/>
					<p>
						Drag 'n' drop some files here, or click to select files
					</p>
				</div>
				</div>
				<aside className={styles.thumbsContainer}>{thumbs}</aside>
			</section>
		</>
	);
}

export default connect(null, productAddAction.dispatch)(MyDropzone);
