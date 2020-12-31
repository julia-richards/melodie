import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { uploadSong, uploadFile } from "../services/song";
import "../styles/SongForm.css";
