package io.nology.employee.employee;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "employees")
public class Employee {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column
  private String firstName;

  @Column
  private String middleName;

  @Column
  private String lastName;

  @Column
  private String emailAddress;

  @Column
  private Long mobNumber;

  @Column
  private String resAddress;

  @Column
  private String empStatus;

  @Column
  private LocalDate startDate;

  @Column
  private LocalDate endDate;

  @Column
  private Boolean onGoing;

  @Column
  private String workBasis;

  @Column
  private Integer hrsPerWeek;

  public Employee(String firstName, String middleName, String lastName, String emailAddress, Long mobNumber,
      String resAddress, String empStatus, LocalDate startDate, LocalDate endDate, Boolean onGoing, String workBasis,
      Integer hrsPerWeek) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.mobNumber = mobNumber;
    this.resAddress = resAddress;
    this.empStatus = empStatus;
    this.startDate = startDate;
    this.endDate = endDate;
    this.onGoing = onGoing;
    this.workBasis = workBasis;
    this.hrsPerWeek = hrsPerWeek;
  }

  public Employee() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getMiddleName() {
    return middleName;
  }

  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getEmailAddress() {
    return emailAddress;
  }

  public void setEmailAddress(String emailAddress) {
    this.emailAddress = emailAddress;
  }

  public Long getMobNumber() {
    return mobNumber;
  }

  public void setMobNumber(Long mobNumber) {
    this.mobNumber = mobNumber;
  }

  public String getResAddress() {
    return resAddress;
  }

  public void setResAddress(String resAddress) {
    this.resAddress = resAddress;
  }

  public String getEmpStatus() {
    return empStatus;
  }

  public void setEmpStatus(String empStatus) {
    this.empStatus = empStatus;
  }

  public LocalDate getStartDate() {
    return startDate;
  }

  public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
  }

  public LocalDate getEndDate() {
    return endDate;
  }

  public void setEndDate(LocalDate endDate) {
    this.endDate = endDate;
  }

  public Boolean getOnGoing() {
    return onGoing;
  }

  public void setOnGoing(Boolean onGoing) {
    this.onGoing = onGoing;
  }

  public String getWorkBasis() {
    return workBasis;
  }

  public void setWorkBasis(String workBasis) {
    this.workBasis = workBasis;
  }

  public Integer getHrsPerWeek() {
    return hrsPerWeek;
  }

  public void setHrsPerWeek(Integer hrsPerWeek) {
    this.hrsPerWeek = hrsPerWeek;
  }

}
