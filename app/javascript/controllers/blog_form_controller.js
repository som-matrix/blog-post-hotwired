import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [
    "authorName",
    "blogContent",
    "authorBlank",
    "authorLimitExceeded",
    "authorSpecialChar",
    "contentBlank",
  ];
  connect() {
    console.log("connected...");
  }

  handleChange() {
    const authorName = this.authorNameTarget.value;
    const blogContent = this.blogContentTarget.value;

    // Blank author name
    if (!authorName.length) {
      this.authorBlankTarget.classList.remove("hidden");
    } else {
      this.authorBlankTarget.classList.add("hidden");
    }

    // Limit exceeds for author name
    if (authorName.length > 10) {
      this.authorLimitExceededTarget.classList.remove("hidden");
    } else {
      this.authorLimitExceededTarget.classList.add("hidden");
    }

    // No special characters
    if (authorName.match(/[^\w\s]/)) {
      this.authorSpecialCharTarget.classList.remove("hidden");
    } else {
      this.authorSpecialCharTarget.classList.add("hidden");
    }

    // Blank content
    if (!blogContent.length) {
      this.contentBlankTarget.classList.remove("hidden");
    } else {
      this.contentBlankTarget.classList.add("hidden");
    }
  }
}
