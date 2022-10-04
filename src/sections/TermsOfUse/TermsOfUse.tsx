import React from "react";
import { Subtitle } from "../../components";
import "./TermsOfUse.scss";

function TermsOfUse() {
  return (
    <div className="TermsOfUse">
      <div className="CenterText">
        <Subtitle>Terms Of Use</Subtitle>
      </div>
      <ol>
        <li>
          <p className="Bold">Terms</p>
          <p>
            By accessing this website, you are agreeing to be bound by these
            terms of service, all applicable laws and regulations, and agree
            that you are responsible for compliance with any applicable local
            laws. If you do not agree with any of these terms, you are
            prohibited from using or accessing this site. The materials
            contained in this website are protected by applicable copyright and
            trademark law.
          </p>
        </li>
        <li>
          <p className="Bold">Use License</p>
          <p>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on CUSEC's website for personal,
            non-commercial transitory viewing only. This is the grant of a
            license, not a transfer of title, and under this license you may
            not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              CUSEC's website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by CUSEC at any time. Upon
            terminating your viewing of these materials or upon the termination
            of this license, you must destroy any downloaded materials in your
            possession whether in electronic or printed format.
          </p>
        </li>
        <li>
          <p className="Bold">Disclaimer</p>
          <p>
            The materials on CUSEC's website are provided on an 'as is' basis.
            CUSEC makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further, CUSEC
            does not warrant or make any representations concerning the
            accuracy, likely results, or reliability of the use of the materials
            on its website or otherwise relating to such materials or on any
            sites linked to this site.
          </p>
        </li>
        <li>
          <p className="Bold">Limitations</p>
          <p>
            In no event shall CUSEC or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit,
            or due to business interruption) arising out of the use or inability
            to use the materials on CUSEC's website, even if CUSEC or a CUSEC
            authorized representative has been notified orally or in writing of
            the possibility of such damage. Because some jurisdictions do not
            allow limitations on implied warranties, or limitations of liability
            for consequential or incidental damages, these limitations may not
            apply to you.
          </p>
        </li>
        <li>
          <p className="Bold">Accuracy of materials</p>
          <p>
            The materials appearing on CUSEC's website could include technical,
            typographical, or photographic errors. CUSEC does not warrant that
            any of the materials on its website are accurate, complete or
            current. CUSEC may make changes to the materials contained on its
            website at any time without notice. However CUSEC does not make any
            commitment to update the materials.
          </p>
        </li>
        <li>
          <p className="Bold">Links</p>
          <p>
            CUSEC has not reviewed all of the sites linked to its website and is
            not responsible for the contents of any such linked site. The
            inclusion of any link does not imply endorsement by CUSEC of the
            site. Use of any such linked website is at the user's own risk.
          </p>
        </li>
        <li>
          <p className="Bold">Modifications</p>
          <p>
            CUSEC may revise these terms of service for its website at any time
            without notice. By using this website you are agreeing to be bound
            by the then current version of these terms of service.
          </p>
        </li>
        <li>
          <p className="Bold">Governing Law</p>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Quebec, CA and you irrevocably submit to
            the exclusive jurisdiction of the courts in that State or location.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default TermsOfUse;
