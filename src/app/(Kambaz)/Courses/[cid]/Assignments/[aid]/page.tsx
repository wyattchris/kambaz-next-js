export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netflify. The ladning page should
        include the following: Your full name and section, Links to each of the
        lab assignments, link to the Kambaz application, and links to all
        relevant source code repositories. The Kambaz application should include
        a link to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as" defaultValue="Percentage">
              <option>Percentage</option>
              <option>Letter Grade</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type" defaultValue="Online">
              <option>Online</option>
            </select>

            <div>Online Entry Options</div>

            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry"> Text Entry</label>
            <br />

            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url"> Website URL</label>
            <br />

            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings"> Media Recordings</label>
            <br />

            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation"> Student Annotation</label>
            <br />

            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload"> File Uploads</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label>
          </td>
          <td>
            <input id="wd-assign-to" defaultValue="Everyone" />
            <br />

            <label htmlFor="wd-due-date">Due</label>
            <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
            <br />
            <label htmlFor="wd-available-from">Available from</label>
            <input
              type="date"
              id="wd-available-from"
              defaultValue="2024-05-06"
            />
            <label htmlFor="wd-available-until">Until</label>
            <input
              type="date"
              id="wd-available-until"
              defaultValue="2024-05-20"
            />
          </td>
        </tr>
      </table>

      <hr />

      <button id="wd-cancel">Cancel</button>
      <button id="wd-save">Save</button>
    </div>
  );
}
