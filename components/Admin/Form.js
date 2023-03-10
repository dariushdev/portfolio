import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";

import adminform from "../../styles/components/Admin.module.scss";
import { submitHandler } from "./Submit";

export default function AdminForm({ data = "", method }) {
  const [title, setTitle] = useState(data.title);
  const [slug, setSlug] = useState(data.slug);
  const [status, setStatus] = useState("");
  const [checked, setChecked] = useState(data.published);

  const editorRef = useRef(null);
  return (
    <div>
      <div className={adminform.articleForm}>
        <h1>Create A New Post</h1>
        {status ? <div className={adminform.statusMessage}>{status}</div> : ""}

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            let content = editorRef.current.getContent();
            const body = { title, slug, checked, content };
            const responseStatus = await submitHandler(data.id, method, body);
            setStatus(responseStatus.message);
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          ></input>
          <input
            type="text"
            id="slug"
            placeholder="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          ></input>
          <label>Publish?</label>
          <input
            id="publish"
            type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          <Editor
            apiKey="ENTER_YOUR_KEY_HERE"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={data.content}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons image",
              ],
              toolbar:
                "undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl | image",
              font_formats:
                "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Oswald=oswald; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",
              content_style:
                "@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap'); body { font-family: Raleway; }",
            }}
          />
          <button className="button">Save</button>
        </form>
      </div>
    </div>
  );
}
