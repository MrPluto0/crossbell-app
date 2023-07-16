"use client";

import { usePostNote } from "@crossbell/connect-kit";
import { useCallback, useState } from "react";
import { Alert, Notification } from "@mantine/core";

export function Note() {
  const postNote = usePostNote();
  const [val, setVal] = useState("");
  const [showErr, setShowErr] = useState(false);
  const [showSuc, setShowSuc] = useState(false);

  const post = useCallback(() => {
    postNote
      .mutateAsync({
        metadata: {
          content: val,
          sources: ["Crossbell Dev"],
          external_urls: ["https://crossbell.io"],
          tags: ["post"],
        },
      })
      .then((res) => {
        if (res.noteId) {
          setShowSuc(true);
        } else {
          setShowErr(true);
        }
      })
      .catch(() => {
        setShowErr(true);
      });
  }, [postNote, val]);

  return (
    <div className="bg-slate-500/10 flex flex-col gap-4 rounded-2xl px-10 py-6">
      <div className="font-sans text-lg font-bold">Post Note</div>
      <textarea
        className="outline-none px-4 py-2 hover:ring-2 focus:ring"
        value={val}
        placeholder="input the content of note"
        onChange={(e) => setVal(e.target.value)}
        rows={4}
      />
      <button
        className="transition px-6 py-2 font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg"
        onClick={post}
      >
        Post
      </button>

      {showSuc && (
        <Notification
          title="Success"
          color="teal"
          onClose={() => setShowSuc(false)}
        >
          You have posted a note successfully.
        </Notification>
      )}

      {showErr && (
        <Notification
          title="Error"
          color="red"
          onClose={() => setShowErr(false)}
        >
          There is an error when you post a note.
        </Notification>
      )}
    </div>
  );
}
