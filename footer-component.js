
class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
           
<footer>
  <section>
 
<div class="share-container">
  <h1>Share This Page:</h1>
  <ul class="share-buttons">
    <!-- Facebook -->
    <li>
      <a href="https://www.facebook.com/sharer.php?u=http://www.large-print-apps.com" 
         target="_blank" aria-label="Share on Facebook">
       <!-- <img src="icons/facebook-icon.svg" alt="Facebook" /> -->
        Facebook 
      </a>
    </li>
    <!-- Twitter -->
    <li>
      <a href="https://twitter.com/share?url=https://www.large-print-apps.com&text=Large Print Apps for Low Vision Users&hashtags=lowvision,accessibility" 
         target="_blank" aria-label="Share on Twitter">
       <!-- <img src="icons/twitter-icon.svg" alt="Twitter" />-->
        Twitter
      </a>
    </li>
    <!-- Threads -->
    <li>
      <a href="https://www.threads.net/share?url=https://www.large-print-apps.com" 
         target="_blank" aria-label="Share on Threads">
      <!--  <img src="icons/threads-icon.svg" alt="Threads" />-->
        Threads
      </a>
    </li>
    <!-- WhatsApp -->
    <li>
      <a href="https://wa.me/?text=Check out this site: https://www.large-print-apps.com" 
         target="_blank" aria-label="Share on WhatsApp">
        <!--<img src="icons/whatsapp-icon.svg" alt="WhatsApp" />-->
        WhatsApp
      </a>
    </li>
    <!-- Bluesky -->
    <li>
      <a href="https://bsky.app/share?text=Check out this site&url=https://www.large-print-apps.com" 
         target="_blank" aria-label="Share on Bluesky">
      <!--  <img src="icons/bluesky-icon.svg" alt="Bluesky" />-->
        Bluesky
      </a>
    </li>
    <!-- Pinterest -->
    <li>
      <a href="https://www.pinterest.com/pin/create/button/?url=https://www.large-print-apps.com&media=https://www.large-print-apps.com/images/example-image.png&description=Large Print Apps for Low Vision Users" 
         target="_blank" aria-label="Share on Pinterest">
       <!-- <img src="icons/pinterest-icon.svg" alt="Pinterest" />-->
        Pinterest
      </a>
    </li>
    <!-- Email -->
    <li>
      <a href="mailto:?subject=Check%20Out%20This%20Website&body=I%20found%20this%20helpful%20website%20for%20low%20vision%20users:%20https://www.large-print-apps.com" 
         aria-label="Share via Email">
       <!-- <img src="icons/email-icon.svg" alt="Email" />-->
        Email
      </a>
    </li>
  </ul>
</div>
</section>
<section> <h1>
  Privacy Policy: The only data that you save to your device is your choice of colors, no other data is collected.
  </h1></section>

</footer>
        `;
    }
}
customElements.define('footer-component', FooterComponent);
