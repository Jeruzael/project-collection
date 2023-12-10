import styles from "../css/locofy.module.css";

const DashboardPause = () => {
  return (
    <div className={styles.dashboardPause}>
      <div className={styles.back} />
      <div className={styles.front} />
      <div className={styles.header} />
      <div className={styles.selftrack}>SELFTRACK</div>
      <img className={styles.mdihamburgerIcon} alt="" src="/mdihamburger.svg" />
      <div className={styles.date}>
        <div className={styles.activity1} />
        <div className={styles.month} />
        <div className={styles.year}>2023</div>
        <div className={styles.day}>15</div>
        <div className={styles.month1}>11</div>
      </div>
      <div className={styles.activityContainer1}>
        <div className={styles.activity} />
        <div className={styles.activityContents}>
          <img className={styles.playIcon} alt="" src="/play-icon.svg" />
          <div className={styles.rest}>Rest</div>
        </div>
      </div>
      <div className={styles.activityContainer2}>
        <div className={styles.activity2} />
        <div className={styles.activityContents}>
          <img className={styles.playIcon} alt="" src="/play-icon1.svg" />
          <div className={styles.play}>Play</div>
        </div>
      </div>
      <div className={styles.activityContainer3}>
        <div className={styles.activity2} />
        <div className={styles.activityContents}>
          <img className={styles.playIcon} alt="" src="/play-icon2.svg" />
          <div className={styles.houseChores}>House Chores</div>
        </div>
      </div>
      <img
        className={styles.startButtonContainer}
        alt=""
        src="/start-button-container.svg"
      />
    </div>
  );
};

export default DashboardPause;
